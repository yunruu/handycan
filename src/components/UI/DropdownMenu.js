import { Image } from 'react-native'
import React from 'react'
import { STYLES, LOGOS, TEXTS } from '../../style/Styles'
import SelectDropdown from 'react-native-select-dropdown'

const DropdownMenu = ({ options, onSelect }) => {
    return (
        <SelectDropdown
            data={options}
            onSelect={(selectedItem, index) => onSelect(selectedItem)}
            defaultButtonText={'Select type of disability'}
            buttonStyle={STYLES.dropdownContainer}
            dropdownStyle={STYLES.dropdownMenu}
            dropdownIconPosition='right'
            renderDropdownIcon={(isOpen) => {
                return(
                    <Image 
                        source={isOpen
                            ? require("../../../assets/dropdown-button.png")
                            : require("../../../assets/dropdown-button-close.png")}
                        style={LOGOS.microLogo} />
                )
            }}
            rowTextStyle={TEXTS.caption16}
            buttonTextStyle={TEXTS.caption16}
            />
    )
}

export default DropdownMenu