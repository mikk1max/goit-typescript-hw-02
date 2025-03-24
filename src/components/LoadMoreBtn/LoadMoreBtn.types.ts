export type LoadMoreBtnProps = {
    loadNextPage: (updateFn: (prevPage: number) => number) => void;
}