import React from "react";

interface HoleProps {
  width: number
  depth: number
  active: boolean
}

const colorActive = '#4aaa29'
const colorInactive = '#aa752a'

const Hole = ({ width, active }: HoleProps) => (
  <div style={{ width: width * 100, backgroundColor: active ? colorActive : colorInactive }} />
)

const isActive = (activeHoles: BoardProps["activeHoles"], holeId: string): boolean => activeHoles.findIndex(id => id === holeId) >= 0

interface BoardProps {
  activeHoles: Array<string>
}

const FingerboardHalf = ({ activeHoles }: BoardProps) => [
  <Hole width={20} depth={5} active={isActive(activeHoles, 'easy')}/>
]

const Fingerboard = (props: BoardProps) => (
  <>
    {FingerboardHalf(props)}
    {FingerboardHalf(props).reverse()}
  </>
)

export default Fingerboard
