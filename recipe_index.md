---
layout: post
title:  "Recipe Index"
date:   2025-04-17 08:51:44 +0100
---


{% comment %}
Build a space separated list of all the index entries. Single recipes
can have mnultiple index entries
{% endcomment %}
{% assign entries = "" %}
{% for recipe in site.recipes %}
{% assign entries = entries | append: ", " | append: recipe.index_entry %}
{% endfor %}



{% comment %}
Split the string into an array and dedupe
{% endcomment %}
{% assign entry_list = entries | split: "," | uniq | sort | where_exp: "item", "item != ''"  %}



{% for thing in entry_list %}
{% assign sthing = thing | strip %}
- {{sthing}}
{%- assign recipes_with_thing = site.recipes | where_exp: "recipe", "recipe.index_entry contains sthing" -%}
{% for recipe_with_thing in recipes_with_thing %}
    - [{{recipe_with_thing.title}}]({{recipe_with_thing.url}})
{%- endfor -%}
{%- endfor -%} 


