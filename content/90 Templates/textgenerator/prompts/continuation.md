---
PromptInfo:
 id: continuation
 name: ⏩ Write a continuation of this text
 description: 
 version: 0.0.1
---
context:
{{#each children}}
{{this.content}}
{{/each}}
{{context}}

prompt:
Write a natural continuation of this story using all provided context.