const initialState=
[

    {
        id:0,
        hotelname:"ABC",
        number:12,
        address:"gulshan"

    },
    {
        id:1,
        hotelname:"XYZ",
        number:13,
        address:"jauhar"

    },

    {
        id:3,
        hotelname:"ABCxxx",
        number:16,
        address:"north"

    }
]


const contactReducer =( state = initialState, action)=>{

     switch (action.type) {
         case "ADD_HOTEL":
             state=[...state , action.payload]
             return state
         default:
             return state;
     }
}

export default contactReducer