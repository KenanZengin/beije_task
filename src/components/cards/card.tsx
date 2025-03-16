import Image from 'next/image'
import Link from 'next/link';


const Card = ({ cardImg, cardTitle, svgPath }: { cardImg: string; cardTitle:string; svgPath: string }) => {
  return (
    <div className="list-item">
      <div className="list-img">
        <Image src={cardImg} alt="list-image" fill sizes="50vw"/>
      </div>
      <Link href={"/packets"} className="list-name">
        <p>
          <Image src={svgPath} alt="list-image" width={24} height={24}/>
          {cardTitle}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#343131"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m9 18 6-6-6-6"
          ></path>
        </svg>
      </Link>
    </div>
  )
}

export default Card