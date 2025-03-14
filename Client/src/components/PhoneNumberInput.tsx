
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'

function PhoneNumberInput() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState(null)
  // If `country` property is not passed
  // then "International" format is used.
  // Otherwise, "National" format is used.
  return (
    <PhoneInput
      country="US"
      value={value}
      onChange={ setValue }
    />
  )
}
export default PhoneNumberInput