

function Footer() {
  return (
    <div className="w-full h-[350px] bg-orange-300 mt-10 ">

  
    <div className=' text-white justify-around items-center h-full w-full text-center
    grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>

        <div className="h-full">
            <h1 className="text-[20px] mb-4">Phone numbers:</h1>
            <p>+(0030) 24270 23136</p>
            <p>+(0030) 6945773986 </p>
        </div>

        <div>
            <h1 className="text-[20px] mb-4">Social Media: </h1>
            <p>Acropolis Motorbikes Skiathos</p>
            <p>acropolis_motorbikes_skiathos </p>
            <p>+(0030) 6945773986</p>
        </div>

        <div>
            <h1 className="text-[20px] mb-4">Contact us</h1>
            
            <p>akropoli@otenet.gr</p>
            <p>akropolis.rental@gmail.com </p>
            <div>
                <p>You will be speaking with :</p>
                <p>Sarah, Thanasis, Ari or Athina. Thank you!!</p>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Footer