

interface LabelProvider {
    getLabel<T>(data: T): string;

    getIconClass ? <T>(data: T): string;
}

