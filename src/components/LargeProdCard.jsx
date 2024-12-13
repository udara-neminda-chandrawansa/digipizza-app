import { Link } from "wouter";
function LargeProdCard({pid, header, price, image}) {
  return (
    <li>
      <Link href={`/products/${pid}`} className="block overflow-hidden no-underline group">
        <img
          src={image}
          alt="prod-card"
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div className="relative pt-3 bg-white">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {header}
          </h3>

          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>
            <span className="tracking-wider text-gray-900"> {price} </span>
          </p>
        </div>
      </Link>
    </li>
  );
}

export default LargeProdCard;
