import React from 'react'
import { RulesContainer ,
     RulesH1 ,
      Card ,
       CardContainer,
        CardH1,
         CardContent,
        CardP} from './StylingRules';
const Rules = (props) => {
    return (
        <>
         <RulesContainer>
             <RulesH1>
                 Rules   
             </RulesH1>
            <CardContainer>
               <Card>
                   <CardH1 onClick={props.toggleRules}>PowerGaming</CardH1>
                   <CardContent issOpen={props.issOpen}>
                       <CardP>[exp:](ta3mel fight b kartouch dhed gang 5 vs 5 w tmout gang lawla 
                           hiya 5assra w lo5ra rabeha (flouss..)
                           </CardP>
                           <CardP>
                           - #-Force_rp : <br/>
                                ➛ testa3mel el pouvoir mta3ek 3al players 
                                [exp:](tebraki wa7ed w t9ollou ejbedli flousek mel bank walla 5arrajli karhbtek mel gc..)
                           </CardP>

                   </CardContent>
                </Card> 
                <Card>
                   <CardH1  onClick={props.toggleRules1}>MetaGaming</CardH1>
                   <CardContent issOpen={props.issOpen1}>
                       <CardP>
                           ➛ tekhou info Hors rp w testa3meleha fi rp <br/> Exp :
                            streamsnipe walla info mn discord wala OOC[out of caracter]
                           </CardP>
                           

                   </CardContent>
                </Card> 
                <Card>
                   <CardH1 onClick={props.toggleRules2} >VOL</CardH1>
                   <CardContent issOpen={props.issOpen2}>
                       <CardP>
                       ➛ t5af 3ala hyet l caracter mta3ek W ta3teha 9ima kima in real life <br/>
                       Exp : ki yabda wa7ed 7ez 3liik sle7 T5af 3la 7yatak w Tasma3 Klemou
                           </CardP>
                           

                   </CardContent>
                </Card> 
                <Card>
                   <CardH1 onClick={props.toggleRules3}>nlr</CardH1>
                   <CardContent issOpen={props.issOpen3}>
                       <CardP>
                       ➛ W enti fel coma matnajem tetfakker 7atta chay melli sar bahdhek ama tetfakker elli sar 9bal matodkhol lel coma <br/>
                           </CardP>
                           <CardP>
                           - #RDM-free-kill : 
                            [To9tel 3bed m8iir reason] <br/>
                            - #VDM :➛ testa3mel vehicule ka sle7 bech totel beha el3bed bech terba7 scene <br/>
                            - #RVDM car kill: ➛ to9tel chkoun m8iir reason b vehicule  <br/>
                           </CardP>   
                           <CardP>
                           - #Script_abuse [UNREALISTIC_USE] : <br/>
                            ➛ Wa9t Tista3mil hajet Btari9a 8alta w mouch wa9i3iya w lmasla7tek <br/>
                            [exp:](Tista3ml phone or radio w inta Ta7t El Méé / Revive wa7ed madhroub fi kartouch fi chare3)<br/>
                           </CardP>

                           <CardP>
                           - #Revenge_Kill : <br/>
                             ➛ taja3 to9tel el3bed eli 9atlak 
                           </CardP>
                        <CardP>
                        - #Green_zone :  <br/>
                        ➛ Blayes safe  mamnou3 ysir feha aya naw3 ml illegal<br/>
                        </CardP>
                        <CardP>
                        - #No_robbery_zone : <br/> 
                        ➛ Blayes l khdem w maandekch l ha9 tebraki chkoun b dbach l khedma wala tesre9 l farm mte3ou<br/>
                        </CardP>
                        <CardP>
                        - #Red-zone  : <br/> 
                        ➛ Danger zone ysir fehom l illegal l kol <br/> 
                        exp: farm drugs , hwem l gangs... <br/> 
                        - #Combat_logging  Refusing RP : <br/> 
                        ➛ ki tabda fi west scene mamnou3 tsaker l game <br/> 
                        [exp:](chaddek l hakem yekhi aamlt alt f4, tmout ta3mel alt f4 bech tforci respawn f sbitar) <br/>
                        </CardP>
                        <CardP>
                        - #Combat_storing  : <br/>
                            ➛ ki tabda fi west scene w tohreb l green zones wala l houmtek ... <br/>
                            [exp:](yhawzou fik 3bed bel mask tohreb l sbitar) <br/>
                        </CardP>
                        <CardP>
                        - #-Fail_drive : <br/>
                            ➛ tsou9 karhebtk ingame kima in reel life <br/>
                            [exp:](ki tabda maandekch karhba offroad matatla3ch f jbal /ki tetfle9 3jeli l karhba mamnou3 tkamel tsou9ha) <br/>
                        </CardP>
                        <CardP>
                        - #-Cop_baiting : <br/>
                            ➛ Mamnou3 ta3mel aya haja bech yhawzek l hakem w takhtfou .. sauf racers w bikers w mafia <br/>
                            [exp:](temchi 9odem l markez w tmed sbo3 ll hakem bch yhawzek) <br/>
                        </CardP>
                        <CardP>
                        - #-Bug_Abuse = <br/>
                        ➛ testa5el bug lscript
                        </CardP>
                   </CardContent>
                </Card> 
                <Card>
                   <CardH1 onClick={props.toggleRules4}>Battle_play</CardH1>
                   <CardContent issOpen={props.issOpen4}>
                       <CardP>
                       [exp:](ta3mel fight b kartouch dhed gang 5 vs 5 w tmout gang lawla hiya 5assra w lo5ra rabeha (flouss..)
                        </CardP>
                           

                   </CardContent>
                </Card>
                <Card>
                   <CardH1 onClick={props.toggleRules5}>Force_rp</CardH1>
                   <CardContent issOpen={props.issOpen5}>
                       <CardP>
                       ➛ testa3mel el pouvoir mta3ek 3al players <br/>
                    [exp:](tebraki wa7ed w t9ollou ejbedli flousek mel bank walla 5arrajli karhbtek mel gc..) <br/>
                        </CardP>
                        <CardP>
                        - #-mixe_rp  : <br/>
                        ➛ inik tkhlat bin lhajet l rp wlhajet mch rp fl game <br/>
                        [exp:](testaamel item inty 3omrek maritou f lrp maghir mats2al alih chnw) <br/>
                        </CardP>
                        <CardP>
                        - #-JOB_ABUSE : 
                        ➛ testa3ml 7aja mta3 5edma trodeha personnel wala 3akess  <br/>
                        [exp:](Idhe el job hadhika feha vehicule testa3melha raho ma3andkch el 7a9 testa3mel karahba personnel si non twaly abuse W faza yaser Out of Character) <br/>
                        </CardP>
                        <CardP>
                        - #-/me : <br/>
                        ➛ personal feeling information ( ta3be fi a7assis or 7ala mta3 caracter )
                        [exp:](Nebki,mrith,7zin..) <br/>
                        </CardP>
                        <CardP>
                        - #-/do : <br/>
                        ➛ rp actionnal information (action ma tnajamch ta3mal'ha b animation fel game)
                        [exp:](ndo9 fi bab...) <br/>
                        - #-Fear_rp : <br/>
                        ➛ ki yabda bech ysirlk mort rp tcampi fi greenzone <br/>
                        </CardP>

                        <CardP>
                        - #-Mass_rp :  <br/>
                        ➛ Mouch khater enti wahdek fi blasa taamel actions (fails) li theb alehom <br/>
                        </CardP>
                           
                        <CardP>
                        - #-Win_rp : <br/>
                        ➛ Taamel l'impossible bech terbeh scene <br/>
                        </CardP>
                        <CardP>
                        - #-Spawn_Kill = <br/>
                        ➛ awel mtspawni y3awdou y3rdouk ili 9atlouk min lawel wy3awdou marra o5ra yo9tlouk
                        </CardP>
                   </CardContent>
                </Card>
            </CardContainer> 
        </RulesContainer>   
       
        </>
    )
}

export default Rules;
