import { useRef, useEffect, RefObject } from 'react'
import { Link } from 'react-router-dom'

interface IDropdownProps {
  handleDropdown: (flag: boolean) => void
}
export default function Dropdown(props: IDropdownProps) {
  const box = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  useOutsideAlerter(popupRef, box, props)

  return (
    <div className={` fixed w-full h-full top-0 left-0 right-0 bottom-0`} ref={popupRef}>
      <div
        ref={box}
        className="bg-white p-4 shadow-lg rounded-md absolute z-[99999] top-[110px] right-12 newwebsite-mobile-popup"
      >
        <div className="text-[15px] flex flex-col space-y-2.5">
          <Link className="text-default" to={`/`}>
            Import an existing project
          </Link>
          <Link className="text-btnPrimary" to={`/`}>
            Deploy manually
          </Link>
        </div>
      </div>
    </div>
  )
}

type Tref1 = RefObject<HTMLDivElement>
type Tref2 = RefObject<HTMLDivElement>

function useOutsideAlerter(ref1: Tref1, ref2: Tref2, props: IDropdownProps) {
  useEffect(() => {
    const { current: c1 } = ref1
    const { current: c2 } = ref2
    // Function for click event
    function handleOutsideClick(event: MouseEvent) {
      if (c2 && !c2.contains(event.target as HTMLElement)) {
        props.handleDropdown(false)
      }
    }
    // Adding click event listener
    c1?.addEventListener('click', handleOutsideClick)
    return () => c1?.removeEventListener('click', handleOutsideClick)
  }, [ref1, ref2, props])
}
