import React from 'react';
import {Component} from 'react';
import {VscSymbolColor} from 'react-icons/vsc'
import {BiBellPlus} from 'react-icons/bi';
import {RiUserAddFill, RiInboxArchiveLine} from 'react-icons/ri'
import {BiImageAlt} from 'react-icons/bi'
import {BsPersonPlus} from 'react-icons/bs'
import {FiMoreVertical} from 'react-icons/fi'
import {GrUndo} from 'react-icons/gr'
import {GrRedo} from 'react-icons/gr'

class CardIcons extends Component {
    render() {
        return (
            <>
                <div className='iconsCard'>
                    <BiBellPlus className='iconsCard'></BiBellPlus>
                    <BsPersonPlus className='iconsCard'></BsPersonPlus>
                    <VscSymbolColor className='iconsCard'></VscSymbolColor>
                    <BiImageAlt className='iconsCard'></BiImageAlt>
                    <RiInboxArchiveLine className='iconsCard'></RiInboxArchiveLine>
                    <FiMoreVertical className='iconsCard'></FiMoreVertical>
                </div>
            </>
        )
    }
}
export default CardIcons;