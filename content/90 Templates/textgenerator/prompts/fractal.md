---
PromptInfo:
 id: fractal
 name: ❄️ Fractal
 description: Where could this story go next?
 version: 0.0.1
---
context:
{{#each children}}
{{this.content}}
{{/each}}
{{context}}

prompt:
Give me 3 options for where this story could go next:

