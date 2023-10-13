import React from 'react'
import { ClockCircleOutlined  , AimOutlined , CaretDownOutlined} from '@ant-design/icons'

  



function Footer() {
  return (
    <>
      <div className='footer'>
        <div>


          <h4 className='footer-heading'>SHIPPING CHARGES</h4>
          <p className='icon'><CaretDownOutlined /></p>
          <p>
            starting from 120/-
          </p>
        </div>




        <div>
          <h4  className='footer-heading'>SUPPORT 24/7</h4>
          <p className='icon'><ClockCircleOutlined /></p>
          <p>contact us 24 hours a day , 7 days a week</p>
        </div>

        <div><h4 className='footer-heading'>TRACK YOUR ORDER </h4>
        <p className='icon'><AimOutlined /></p>
 
          <p>track your order for quick updates</p></div>
      </div>

      {/* <div className="footer-2">
        <div>
          <h4 >Contact us</h4>
          <p>for more details <br />call 090078601</p>

        </div>
      </div> */}
    </>

  )
}

export default Footer