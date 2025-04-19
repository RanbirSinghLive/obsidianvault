 [[Flamingo Outline]] | [[Flamingo Notes]]


```dataview
TABLE WITHOUT ID
sum(nonnull(rows.words)) as "Word Count", "<progress value='" + sum(nonnull(rows.words)) + "' max='50000' />" as "Progress to 50K"
from "Cards/The Flamingos Fly"
WHERE words
GROUP BY ""
```


```dataview
table setting, plot1, character, date, words, draft
from "Cards/The Flamingos Fly"
where file.name != "Index"
sort date asc
```
