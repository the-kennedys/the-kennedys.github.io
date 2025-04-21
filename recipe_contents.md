---
layout: post
title:  "Recipe Contents"
date:   2025-04-17 08:51:44 +0100
---

{% assign sections = site.recipes | map:"contents_entry" | uniq %}

{% for section in sections %}
## {{ section }}
  {% assign recipes = site.recipes | where: "contents_entry", section %}
  {% for recipe in recipes %}
[{{recipe.title}}]({{recipe.url}})
  {% endfor %} 
{% endfor %}




