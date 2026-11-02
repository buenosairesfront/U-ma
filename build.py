#!/usr/bin/env python3
# Genera el muestrario U-MA (README*.md de este repo) y actualiza, en los
# repos hermanos de ../, la sección "familia Chordex" de cada Chordex y el
# link a U-MA de los demás instrumentos. Todo sale de catalog.py.
#
# uso: python3 build.py
# Después hay que hacer commit y push en cada repo que cambió.

import os
import re
import sys

from catalog import GH, LANG_NAMES, LANGS, NORNS, PAGES, RAW, T, UMA_REPO, WEB

HERE = os.path.dirname(os.path.abspath(__file__))
REPOS = os.path.dirname(HERE)


def readme_name(lang):
    return "README.md" if lang == "en" else f"README.{lang}.md"


def repo_url(repo, lang):
    # los instrumentos tienen README en los 7 idiomas: se enlaza el del idioma
    if lang == "en":
        return GH + repo
    return f"{GH}{repo}/blob/main/{readme_name(lang)}"


def uma_url(lang):
    return repo_url(UMA_REPO, lang)


def lang_bar(lang):
    parts = []
    for l in LANGS:
        name = LANG_NAMES[l]
        parts.append(f"**{name}**" if l == lang else f"[{name}]({readme_name(l)})")
    return " · ".join(parts)


def install(repo):
    return f"`;install {GH}{repo}`"


def norns_row(item, lang, width):
    url = repo_url(item["repo"], lang)
    img = f'<a href="{url}"><img src="{RAW}{item["repo"]}/main/{item["thumb"]}" width="{width}" alt="{item["name"]}"></a>'
    text = f'**[{item["name"]}]({url})**<br>{item["desc"][lang]}<br>{install(item["repo"])}'
    return f"| {img} | {text} |"


# ---- muestrario ---------------------------------------------------------------

def showcase(lang):
    family = [i for i in NORNS if i["family"] == "chordex"]
    others = [i for i in NORNS if i["family"] != "chordex"]
    out = [lang_bar(lang), "", "# U-MA", "", T["tagline"][lang], "",
           f'## {T["sec_norns"][lang]}', "", T["norns_note"][lang], "",
           f'### {T["family_h"][lang]}', "", T["family_page"][lang], "",
           "| | |", "|---|---|"]
    out += [norns_row(i, lang, 256) for i in family]
    out += ["", f'### {T["other_h"][lang]}', "", "| | |", "|---|---|"]
    out += [norns_row(i, lang, 256) for i in others]
    out += ["", f'## {T["sec_web"][lang]}', "", T["web_note"][lang], "",
            "| | | |", "|---|---|---|"]
    for w in WEB:
        page = f'{PAGES}{w["repo"]}/'
        out.append(f'| **[{w["name"]}]({page})** | {w["desc"][lang]} | '
                   f'[{T["open"][lang]}]({page}) · [{T["code"][lang]}]({GH}{w["repo"]}) |')
    out += ["", "---", "", f'*{T["footer"][lang]}*', ""]
    return "\n".join(out)


# ---- secciones en los repos hermanos ------------------------------------------

def family_block(item, lang):
    lines = [f"<!-- u-ma:family -->", f'## {T["family_h"][lang]}', "", T["family_intro"][lang], "",
             "| | |", "|---|---|"]
    lines += [norns_row(i, lang, 200) for i in NORNS if i["family"] == item["family"] and i is not item]
    lines += ["", T["uma_link"][lang].format(url=uma_url(lang)), "<!-- /u-ma:family -->", ""]
    return "\n".join(lines)


def more_block(lang):
    return "\n".join(["<!-- u-ma:more -->", T["uma_link"][lang].format(url=uma_url(lang)),
                      "<!-- /u-ma:more -->", ""])


def put_block(text, tag, block, before):
    # reemplaza el bloque marcado si ya está; si no, lo inserta antes del título
    marked = re.compile(rf"<!-- u-ma:{tag} -->.*?<!-- /u-ma:{tag} -->\n", re.S)
    if marked.search(text):
        return marked.sub(lambda _: block, text, count=1)
    i = text.find("\n" + before + "\n")
    if i < 0:
        raise ValueError(f"no encuentro «{before}»")
    return text[:i + 1] + block + "\n" + text[i + 1:]


def update_repo(item):
    changed = []
    for lang in LANGS:
        path = os.path.join(REPOS, item["repo"], readme_name(lang))
        with open(path, encoding="utf-8") as f:
            old = f.read()
        if item["family"]:
            new = put_block(old, "family", family_block(item, lang), T["h_requirements"][lang])
        else:
            new = put_block(old, "more", more_block(lang), T["h_credits"][lang])
        if new != old:
            with open(path, "w", encoding="utf-8") as f:
                f.write(new)
            changed.append(os.path.relpath(path, REPOS))
    return changed


def main():
    for lang in LANGS:
        with open(os.path.join(HERE, readme_name(lang)), "w", encoding="utf-8") as f:
            f.write(showcase(lang))
    changed = []
    for item in NORNS:
        if os.path.isdir(os.path.join(REPOS, item["repo"])):
            changed += update_repo(item)
        else:
            print(f"aviso: falta el repo local {item['repo']}", file=sys.stderr)
    print("muestrario: 7 README generados")
    print("\n".join(changed) if changed else "repos hermanos: sin cambios")


if __name__ == "__main__":
    main()
