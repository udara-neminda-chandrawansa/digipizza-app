function LargeProdCard({pid, header, price, image}) {
  return (
    <li>
      <a href={`/products/${pid}`} className="group block overflow-hidden no-underline">
        <img
          src={image}
          alt="prod-card"
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div className="relative bg-white pt-3">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {header}
          </h3>

          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>
            <span className="tracking-wider text-gray-900"> {price} </span>
          </p>
        </div>
      </a>
    </li>
  );
}

export default LargeProdCard;
