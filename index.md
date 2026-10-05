---
layout: home
title: Notes and examples
---

Practical, inspectable examples about game effects and AI assisted workflows.

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%B %-d, %Y" }}
{% endfor %}
