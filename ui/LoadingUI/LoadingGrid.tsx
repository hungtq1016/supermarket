import LoadingCard from "./LoadingCard";

function LoadingGrid() {
    return ( 
        <div className="grid grid-cols-3 gap-4">
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
        </div>
     );
}

export default LoadingGrid;