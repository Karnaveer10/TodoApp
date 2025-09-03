import React from 'react'

const Analytics = ({setShowAnalytics ,showAnalytics}) => {
    return (
        <>
            <div>
                hello from the analytics page
            </div>

            <button type="button" onClick={() => setShowAnalytics(false)} disabled={showAnalytics} className=" flex disabled:opacity-50 disabled:cursor-not-allowed justify-center items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 gap-3">

                    Back

                </button>
        </>
    )
}

export default Analytics
