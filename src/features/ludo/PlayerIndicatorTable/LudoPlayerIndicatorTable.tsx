import React from 'react'
import { Table } from 'react-bootstrap'
import { PLAYER } from '../ludo.constants';

interface propsInterface {
  playingColor: string
}
const LudoPlayerIndicatorTable = (props: propsInterface) => {
  const { playingColor } = props;
  return (
    <div className="playerTableWrapper mt-4">
      <Table bordered className="playerTable">
        <tbody>
          <tr>
            <td>
              <div className="playerIndicator greenBg"></div>
            </td>
            <td>
              {playingColor === PLAYER.green ? 'Green Move' : ''}
            </td>
          </tr>
          <tr>
            <td>
              <div className="playerIndicator yellowBg"></div>
            </td>
            <td>
              {playingColor === PLAYER.yellow ? 'Yellow Move' : ''}
            </td>
          </tr>
          <tr>
            <td>
              <div className="playerIndicator blueBg"></div>
            </td>
            <td>
              {playingColor === PLAYER.blue ? 'Blue Move' : ''}
            </td>
          </tr>
          <tr>
            <td>
              <div className="playerIndicator redBg"></div>
            </td>
            <td>
              {playingColor === PLAYER.red ? 'Red Move' : ''}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default LudoPlayerIndicatorTable;