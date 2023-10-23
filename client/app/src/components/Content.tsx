export default function Content() {
  const items = [
    {
      'title': 'Growth',
      'discription': 'Filler text is dummy text which has no meaning however looks very similar to real text.',
      'text': 'More'
    },
    {
      'title': 'Security',
      'discription': 'Filler text is dummy text which has no meaning however looks very similar to real text.',
      'text': 'More'
    }
  ];

  const itemList = items.map((item, index)=>{
    return (
      <li key={index}>
        <div className="flex flex-col rounded-lg border p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">{item.title}</h3>
          <p className="mb-4 text-gray-500">{item.discription}</p>
          <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">{item.text}</a>
        </div>
      </li>
    )})

  return(
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-64">
          <ul className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-2">
            {itemList}
          </ul>
        </div>
      </div>
    </>
  )
}