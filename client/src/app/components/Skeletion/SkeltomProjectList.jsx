import SkeltonProductItem from "./SkeltonProductItem";

function SkeltomProjectList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-3 ">
      <SkeltonProductItem />
      <SkeltonProductItem />
      <SkeltonProductItem />
      <SkeltonProductItem />
    </div>
  );
}

export default SkeltomProjectList;
