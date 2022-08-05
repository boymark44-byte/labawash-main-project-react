const Brands = () => {
    const arielLogo = require('../assets/ariel.png')
    const downyLogo = require('../assets/downy.png')
    const unileverLogo = require('../assets/unilever-logo.png')

  return (
    <section class="brands">
        <div class="small-container">

            <h2 class="title">Brands gamit pag-laba</h2>
            
            <div class="row">

                {/* <!-- 1st Brand --> */}
                <div class="col-5">
                    <img src={arielLogo} alt="" />
                </div>

                {/* <!-- 2nd Brand --> */}
                <div class="col-5">
                    <img src={downyLogo} alt="" />
                </div>

                {/* <!-- 3rd Brand --> */}
                <div class="col-5">
                    <img src={unileverLogo} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brands