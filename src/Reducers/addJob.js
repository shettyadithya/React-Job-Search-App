const addJobDefaultState=[];

const addJobReducer=(state=addJobDefaultState,action)=>{
    switch(action.type){
        case 'ADD_JOB':
        return [
            ...state,
            action.jobs
        ];
        default:
        return state;
    }
};

export default addJobReducer;