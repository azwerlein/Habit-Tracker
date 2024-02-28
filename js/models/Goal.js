function Goal(name, streak, maxDays) {
    this.name = name;
    this.streak = streak;
    this.maxDays = maxDays;

    this.percentage = () => this.streak / this.maxDays * 100;
}

