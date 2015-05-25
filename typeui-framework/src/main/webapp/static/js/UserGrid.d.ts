/**
 *
 * @author Gabor Kokeny
 */
declare class UserGrid extends Grid {
    constructor(parent: Container);
    protected init(): void;
    getColumnModel(): ColumnModel;
}
