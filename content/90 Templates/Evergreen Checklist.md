**Card Status** (*click to refresh*): `=choice((length(filter(this.file.tasks.completed, (t) => t = true))) > 6, "🌲", choice((length(filter(this.file.tasks.completed, (t) => t = true))) > 1, "🪴", choice((length(filter(this.file.tasks.completed, (t) => t = true))) > 0, "🌱", "Still a seed." )))`

- [ ] An inkling of an idea
- [ ] A fully-fledged idea
- [ ] About one thing 
- [ ] About a concept (vs event, topic etc)
- [ ] Densely linked
- [ ] Useful as a building block
- [ ] Written for me, not for an audience