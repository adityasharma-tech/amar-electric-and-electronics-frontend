export default function PrepaidModeSelector({
  currentModeId,
  modeName,
  modeId,
  setSelected,
}) {
  return (
    <div className="ml-5 w-full">
      <button
        onClick={() => setSelected(modeId)}
        aria-selected={currentModeId == modeId ? "true" : "false"}
        className="px-3 py-2 border rounded-lg flex min-w-[15rem] justify-between aria-selected:bg-orange-100 transition aria-selected:border-orange-300"
      >
        <div className="flex gap-x-2">
          {currentModeId != modeId ? (
            <div className="flex my-auto justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-gray-400 rounded-full">
              <div className="transition-all duration-300 rounded-full w-[0px] h-[0px]"></div>
            </div>
          ) : (
            <div className="flex my-auto justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-gray-800 rounded-full">
              <div className="transition-all duration-300 rounded-full w-[100%] h-[100%] bg-gray-800"></div>
            </div>
          )}
          <span className="my-auto">{modeName}</span>
        </div>
        <span>
          <img className="w-20 ml-auto rounded" src="/cashfree-payments.png" />
        </span>
      </button>
    </div>
  );
}
