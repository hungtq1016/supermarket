'use client'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from 'next/navigation';

library.add(fas)
interface TimeLine{
  id: number | string,
  content: string,
  target: string,
  href: string,
  status: string,
  datetime: string,
}
const timeline: Array<TimeLine> =  [
    {
      id: 1,
      content: 'Đã nhận đơn hàng',
      target: '63V93W6D11SJ1HQ0NZPSA20W',
      href: '#',
      status: 'done',
      datetime: '2023-09-20',
  
    },
    {
      id: 2,
      content: 'Đang vận chuyển đơn hàng',
      target: '86M1IMJSU4JKQXUEP2GTPI4A',
      href: '#',
      status: 'doing',
      datetime: '2023-09-22',

    },
    {
      id: 3,
      content: 'Hoàn trả đơn hàng',
      target: 'A9D2X2NWW7AC6NYSH57L58HO',
      href: '#',
      status: 'back',
      datetime: '2023-09-28',

    },
    {
      id: 4,
      content: 'Đã hủy đơn hàng',
      target: '3C3UDSRBYA03L3B7KIXCTOLT',
      href: '#',
      status: 'cancel',
      datetime: '2023-09-30',
 
    },
    {
      id: 5,
      content: 'Đã nhận đơn hàng',
      target: '5FUMS95PRDRV1TFLMLO49EZ8',
      href: '#',
      status: 'done',
      datetime: '2023-10-04',

    },
    {
      id: 6,
      content: 'Đang vận chuyển đơn hàng',
      target: '86M1IMJSU4JKQXUEP2GTPI4A',
      href: '#',
      status: 'doing',
      datetime: '2023-09-22',

    },
    {
      id: 7,
      content: 'Hoàn trả đơn hàng',
      target: 'A9D2X2NWW7AC6NYSH57L58HO',
      href: '#',
      status: 'back',
      datetime: '2023-09-28',

    },
    {
      id: 8,
      content: 'Đã hủy đơn hàng',
      target: '3C3UDSRBYA03L3B7KIXCTOLT',
      href: '#',
      status: 'cancel',
      datetime: '2023-09-30',
 
    },
  ]

function Page() {
  const searchParams = useSearchParams();
  const filter = searchParams?.get('filter') ;


  const filterQuery = () => {
    // Avoid filter for null value
    if (!filter) {
      return timeline;
    }

    const filterData = timeline.filter(
      (event) => event.status === filter
    );
    return filterData;
  };

  const data =filterQuery();
  return (
    <>
      <div className="flow-root max-h-[400px] h-full overflow-y-scroll">
        <ul role="list" className="-mb-8">
          {data.map((event, eventIdx) => (
            <li key={event.id} className='pr-4'>
              <div className="relative pb-8">
                {eventIdx !== timeline.length - 1 ? (
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3">
                  {event.status == 'done' &&
                    <div>
                      <span className={'h-8 w-8 rounded-full flex items-center justify-center ring-8 bg-lime-100 ring-white'} >
                        <FontAwesomeIcon className="h-5 w-5 text-lime-600" aria-hidden="true" icon={'check'} />
                      </span>
                    </div>
                  }
                  {event.status == 'doing' &&
                    <div>
                      <span className={'h-8 w-8 rounded-full flex items-center justify-center ring-8 bg-amber-100 ring-white'} >
                        <FontAwesomeIcon className="h-5 w-5 text-amber-600" aria-hidden="true" icon={'truck-fast'} />
                      </span>
                    </div>
                  }
                  {event.status == 'back' &&
                    <div>
                      <span className={'h-8 w-8 rounded-full flex items-center justify-center ring-8 bg-sky-100 ring-white'} >
                        <FontAwesomeIcon className="h-5 w-5 text-sky-600" aria-hidden="true" icon={'rotate-left'} />
                      </span>
                    </div>
                  }
                  {event.status == 'cancel' &&
                    <div>
                      <span className={'h-8 w-8 rounded-full flex items-center justify-center ring-8 bg-red-100 ring-white'} >
                        <FontAwesomeIcon className="h-5 w-5 text-red-600" aria-hidden="true" icon={'ban'} />
                      </span>
                    </div>
                  }
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        {event.content}{' '}
                        <a href={event.href} className="font-medium text-gray-900">
                          {event.target}
                        </a>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime={event.datetime}>{event.datetime}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;