

class HashSet<T> extends List<T> {

    add(t: T) {
        if (this.contains(t)) {
            return;
        }

        super.add(t)
    }
}