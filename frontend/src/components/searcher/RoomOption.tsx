import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setOptionAdult, setOptionRoom } from '../../redux/slices/searchSlice'

type Props = {
  openRoomOption: boolean
  setOpenRoomOption: React.Dispatch<boolean>
}

function RoomOption({ openRoomOption, setOpenRoomOption }: Props) {
  const dispatch = useAppDispatch()
  const {option } = useAppSelector(state => state.search)
  return (
    <>
      {openRoomOption && (
        <div className='absolute border border-gray-light z-50 md:shadow-md justify-between left-0 flex flex-col md:block top-0 bg-white md:top-[37px] w-full md:h-auto h-screen md:w-[300px] md:left-[50%] md:translate-x-[-50%] rounded-xl md:p-3'>
          <div className='w-full'>
            <div className="flex flex-col gap-5 p-5">
              <div className="flex items-center justify-between">
                <div className="font-medium flex items-center gap-2">
                  <FaRegUser className="text-xl" />
                  Унталгын өрөө
                </div>
                <div className="optionCounter flex items-center">
                  <div
                    // disabled={option.adult <= 1}
                    className="btn-border p-2"
                    onClick={() => dispatch(setOptionAdult("hasah"))}
                  >
                    <AiOutlineMinus />
                  </div>
                  <span className="text-lg font-medium p-2">
                    {option.adult}
                  </span>
                  <div
                    className="btn-border p-2"
                    onClick={() => dispatch(setOptionAdult("nemeh"))}
                  >
                    <AiOutlinePlus />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium flex items-center gap-2">
                  <MdOutlineBedroomChild className="text-xl" />
                  Угаалгын өрөө
                </div>
                <div className="optionCounter flex items-center">
                  <div
                    // disabled={option.room <= 1}
                    className="btn-border p-2"
                    onClick={() => dispatch(setOptionRoom("hasah"))}
                  >
                    <AiOutlineMinus />
                  </div>
                  <span className="text-lg font-medium p-2">
                    {option.room}
                  </span>
                  <div
                    className="btn-border p-2"
                    onClick={() => dispatch(setOptionRoom("nemeh"))}
                  >
                    <AiOutlinePlus />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='md:hidden m-5 absolute bottom-0 left-0 right-0'>
            <button className='btn-primary w-full p-4' onClick={() => setOpenRoomOption(false)}>
              Хаах
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default RoomOption