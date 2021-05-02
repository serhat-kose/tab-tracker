import Api from '@/services/Api'

export default{
    register(credantials){
        return Api().post('register',credantials)
    }
}