
interface modalProps{
    isOpen:boolean
    setOpen:(isOpen:boolean)=> void
    
    data:{
        codcomp:number
        codpro:number
        codcli:number
        qtda:number
        preco:number
        datacomp:string
    }
   

}
import './modal.css';

export function Modal({isOpen, setOpen, data }:modalProps){
    
    if(isOpen){
        return(
            <div className='container'>
                <div className='modal'>
                    <h2>Janela modal</h2>
                    <div className='containerDados'>
                        <p>Código da compra:  <strong>{data.codcomp}</strong></p>
                        <p>Código do produto: <strong>{data.codpro}</strong> </p>
                        <p>Código do cliente: <strong>{data.codcli}</strong></p>
                        <p>Quantidade comprada: <input type="text" value={data.qtda} /></p>
                        <p>Preço da compra:  <input type="text" value={data.preco} /></p>
                    </div>

                    <button onClick={()=>setOpen(!isOpen)}>Fechar</button>

                </div>
            </div>
            
        );
    }else{
        return null;
    }
}