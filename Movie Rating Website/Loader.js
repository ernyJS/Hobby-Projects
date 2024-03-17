export default function Loader({error, detailLoading}){
    return <div className="loader">
        {error && detailLoading === "Failed to fetch" ? <div>Failed to fetch</div> : <div className="loader-noerror">
            <div className="dot1">.</div>
            <div className="dot2">.</div>
            <div className="dot3">.</div>
            <div className="dot4">.</div>
        </div>}
    </div>
}