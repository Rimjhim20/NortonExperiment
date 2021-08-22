import pic from './img/NORTON.JPG'
import pic1 from './img/thevnine.jpg'
import "./App.css";
import perform1, { nextt, nextt2, nextt3, nextt4, perform2, perform3, perform4, printpage } from './perform'

function App() {
  return (
    <>

<div id="whole_body" className="w-10/12 h-auto ml-auto mr-auto">
        <div className="font-bold  px-4 rounded-lg text-5xl text-center h-auto mt-8">
          Experiment: Verification of Norton's Theorem
        </div>
        <form name="f1" id="f1">
          <div className="static w-full">
            <br />
            <div id="main_circuit" className="relative block w-7/12 mt-24">
              <img src={pic} className="absolute border-2 border-white w-full" alt="img" />
               <input type="number" name="r1" defaultValue={100} id="r1" className="absolute w-12  left-40 mt-8 " />
                <input type="number" name="r3" defaultValue={150} id="r3" className="absolute w-12 left-72 " />
                 <input type="number" name="r2" defaultValue={200} id="r2" className="absolute w-11 left-72 -ml-2  mt-44" />
                 <input type="number" name="rl1" defaultValue={300} id="rl1" className="absolute w-12 right-10 mt-44" /> 
                 <input type="number" name="v2" defaultValue={110} id="v2" className="absolute w-12 left-8 mt-32" /> 
                 <input type="number" name="v1" defaultValue={220} id="v1" className="absolute w-12 left-8 mt-44" />
                  <input type="number" name="A" defaultValue={0} id="A" className=" absolute right-40 top-4 mt-2 text-center bg-gradient-to-r from-blue w-14 text-black border-2 border-blue rounded-lg " readOnly="readonly" /> 
                  <input type="number" name="V" defaultValue={0} id="V" className="absolute right-36 top-28 mt-2 text-center bg-gradient-to-r from-blue w-14 text-black border-2 border-blue rounded-lg" readOnly="readonly" />
                   <select name="s1" id="s1" className="cursor-pointer bg-blue absolute w-32 top-72 mt-4 left-16">
                <option value={1} selected >
                  S1 Pos-1
                </option>
                <option value={2}>
                  S1 Pos-2
                </option>
                <option value={3}>
                  S1 Open
                </option>
              </select>
               <select name="s2" id="s2" className="cursor-pointer bg-blue absolute w-32 top-72 mt-4 right-16">
                <option value={1} selected>
                  S2 Pos-1
                </option>
                <option value={2}>
                  S2 Pos-2 (Load)
                </option>
                <option value={3}>
                  S2 Pos-2 (Short)
                </option>
              </select>
            </div>
            <div id="thckt" className="relative bg-gray-100 float-left hidden w-6/12">
              <img src={pic1} className="c2" alt=""/> 
              <input type="number" name="vth2" defaultValue={0} id="vth2" className="c14" readOnly="readonly" />
               <input type="number" name="rth2" defaultValue={0} id="rth2" className="c15" readOnly="readonly" />
               <input type="number" name="rl2" defaultValue={0} id="rl2" className="c16" readOnly="readonly" />
              <div className="c17">
                Load Current(I<sub>L</sub>) &nbsp;:
              </div><input type="number" name="A13" defaultValue={0} id="A13" className="c18" readOnly="readonly" />
            </div>
            <div className=" float-right p-4 w-96 h-92 border-4 border-black rounded-xl">
            <div className=" font-bold text-3xl text-center">
            Instructions
              </div>
              <br />


              <div id="tab-content1" >
              <ul  class="list-disc p-4 text-xl  italic ">
                  <li class="mb-4">Circuit to determnine actual load current</li>
                  <li>Select S1 to Position-1 &amp; S2 to position-2 (Load)</li>
                  <li> Then click on Run.</li>
                  </ul>
                <p className="text-center"><input type="button" className=" mb-8 inline block text-center font-bold bg-gradient-to-r from-blue border-2 border-black  text-2xl px-2  rounded-xl text-pink-800 cursor-pointer " defaultValue="Run" onClick={perform1} /></p>
                <p >Load current (I<sub>RL</sub>): &nbsp; &nbsp; <input type="number" name="A1" defaultValue={0} id="A1" className="text-black border-2 border-black w-18 text-center bg-gradient-to-r from-blue " readOnly="readonly" /></p>
                <p class="ml-72"><input type="button" className="border-2 border-black mt-4  px-2 text-black font-bold bg-gradient-to-r from-blue rounded-lg" defaultValue="Next" id="next1" onClick={nextt} disabled="true" /></p>
              </div>



              <div id="tab-content2" className="hidden">
              <ul  class="list-disc p-4 text-xl  italic ">
                  <li class="mb-4">Circuit to determine Norton Circuit Current(I<sub>Nort</sub>)</li>
                  <li>Select S1 to Position-1 (Supply) &amp; S2 to Position-2 (Short)</li>
                  <li> Then click on Run.</li>
                  </ul> 
                <p className="text-center"><input type="button" className="mb-8 inline block text-center font-bold bg-gradient-to-r from-blue border-2 border-black  text-2xl px-2  rounded-2xl text-pink-800 " defaultValue="Run" onClick={perform2} /></p>
                <p >Norton Circuit Current(I<sub>Nort</sub>):&nbsp; &nbsp; <input type="number" name="vth1" defaultValue={0} id="vth1" className="text-black border-2 border-black w-18 text-center bg-gradient-to-r from-blue" readOnly="readonly" /></p>
                <p class="ml-72"><input type="button" className="border-2 border-black mt-4  px-2 text-black font-bold bg-gradient-to-r from-blue rounded-lg" defaultValue="Next" id="next2" onClick={nextt2} disabled /></p>
              </div>


              <div id="tab-content3" className="hidden">
              <ul  class="list-disc p-4 text-xl italic">
                  <li class="mb-4">Circuit to determine Norton Circuit Resistance(R<sub>Nort</sub>)</li>
                  <li>Select S1 to Position-2 (Short) &amp; S2 to Position-1 (Supply). </li>
                  <li> Then click on Run.</li>
                  </ul> 
                <p className="text-center"><input type="button" className="mb-8 inline block text-center font-bold bg-gradient-to-r from-blue border-2 border-black  text-2xl px-2  rounded-2xl text-pink-800" defaultValue="Run" onClick={perform3} /></p>
                <p >Supply Voltage (V<sub>2</sub>) : 
                <input type="number" name="v22" defaultValue={0} id="v22" className="bg-blue border-2 w-16 border-black text-black text-center" readOnly="readonly" />
                <br/> &nbsp; &amp; Supply Current : <input type="number" name="A12" defaultValue={0} id="A12" className="mt-4 bg-blue border-2 text-center w-16 border-black text-black" readOnly="readonly" />
                  <br />
                  <b>Norton Resistance (R<sub>Nort</sub>):</b>&nbsp; &nbsp; <input type="number" name="rth1" defaultValue={0} id="rth1" className="text-black border-2 border-black w-18 text-center bg-gradient-to-r from-blue" readOnly="readonly" /></p>
                <p class="ml-72"><input type="button" className="border-2 border-blue mt-4  px-2 text-black font-bold bg-gradient-to-r from-blue rounded-lg" defaultValue="Next" id="next3" onClick={nextt3} disabled /></p>
              
              </div>



              <div id="tab-content4" className="hidden">
              <ul  class="list-disc p-4 text-xl  italic">
                  <li class="mb-4">   Circuit to determine Load Current from Norton Equivalent Circuit</li>
                  <li>To obatin Load Current(I<sub>RL</sub>)) from Norton Equivalent Circuit obatined</li>
                  <li> Then click on Run.</li>
                  </ul>
                <p className="text-center "><input type="button" className=" mb-8 inline block text-center font-bold bg-gradient-to-r from-blue border-2 border-black  text-2xl px-2  rounded-2xl text-pink-800 " defaultValue="Run" onClick={perform4} id="per4" /></p>
                <p><input type="button" className="border-2 border-blue mt-4  px-2 text-black font-bold bg-gradient-to-r from-blue rounded-lg" defaultValue="Finish" id="next4" onClick={nextt4} disabled /></p>
             
              </div>


            </div>
          </div>
          <div className="text-center clear-both" />
          <div id="observation" className="text-center w-11/12 mt-28">
            <h3 className="font-bold text-4xl  text-black mb-4 ">Observation Table</h3>
            <table cellSpacing={0} className="text-sm border-4 border-black center ">
            
              <tbody><tr>
                  <th class="bg-blue border-b-2 border-r-2 text-xl  border-black p-4">SL No.</th>
                  <th class="bg-blue border-b-2 border-r-2 text-xl  border-black p-2">Actual Load Current(I<sub>RL</sub>)</th>
                  <th class="bg-blue border-b-2 border-r-2 text-xl  border-black p-2">Load Voltage(V<sub>L</sub>)</th>
                  <th class="bg-blue border-b-2 border-r-2 text-xl  border-black p-2">Load Resistance (R<sub>L</sub>)=V<sub>RL</sub>/I<sub>RL</sub></th>
                  <th class="bg-blue border-b-2 border-r-2 text-xl  border-black p-2">Norton Cirucit current(I<sub>Nort</sub>)</th>
                  <th class="bg-blue border-b-2 border-r-2 text-xl  border-black p-2">Supply Voltage(V<sub>2</sub>)</th>
                  <th class="bg-blue border-b-2 border-r-2 text-xl  border-black p-2">Ammeter Reading(I)</th>
                  <th class="bg-blue border-b-2 border-r-2 text-xl  border-black p-2">Norton Resistance R<sub>Norton</sub>=V<sub>2</sub>/I</th>
                  <th class="bg-blue border-b-2 border-r-2 text-xl  border-black p-2">Load current (I<sub>RL</sub>)=I<sub>Nort</sub>*R<sub>Nort</sub>/(R<sub>Nort</sub>+R<sub>L</sub>)</th>
                </tr>
                {/* Table Header */}
                <tr>
                  <td class="border-2  border-blue p-2 ">1</td>
                  <td class="border-2  border-blue p-4"><input type="number" name="tr1" defaultValue id="tr1" className="bg-transparent  text-center border-none w-20"  readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr2" defaultValue id="tr2" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr3" defaultValue id="tr3" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr4" defaultValue id="tr4" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr5" defaultValue id="tr5" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr6" defaultValue id="tr6" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr7" defaultValue id="tr7" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr8" defaultValue id="tr8" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                </tr>
                {/* Table Row */}
                <tr>
                  <td  class="border-2  border-blue p-4">2</td>
                  <td  class="border-2   border-blue p-4"><input type="number" name="tr10" defaultValue id="tr10" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr20" defaultValue id="tr20" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr30" defaultValue id="tr30" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr40" defaultValue id="tr40" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr50" defaultValue id="tr50" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2   border-blue p-4"><input type="number" name="tr60" defaultValue id="tr60" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr70" defaultValue id="tr70" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2   border-blue p-4"><input type="number" name="tr80" defaultValue id="tr80" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                </tr>
                <tr>
                  <td  class="border-2  border-blue p-4">3</td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr11" defaultValue id="tr11" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr21" defaultValue id="tr21" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr31" defaultValue id="tr31" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr41" defaultValue id="tr41" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr51" defaultValue id="tr51" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr61" defaultValue id="tr61" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr71" defaultValue id="tr71" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr81" defaultValue id="tr81" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                </tr>
                <tr>
                  <td  class="border-2  border-blue p-4">4</td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr12" defaultValue id="tr12" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr22" defaultValue id="tr22" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr32" defaultValue id="tr32" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr42" defaultValue id="tr42" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr52" defaultValue id="tr52" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr62" defaultValue id="tr62" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr72" defaultValue id="tr72" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr82" defaultValue id="tr82" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                </tr>
                <tr>
                  <td  class="border-2  border-blue p-4">5</td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr13" defaultValue id="tr13" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr23" defaultValue id="tr23" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr33" defaultValue id="tr33" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr43" defaultValue id="tr43" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr53" defaultValue id="tr53" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr63" defaultValue id="tr63" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr73" defaultValue id="tr73" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                  <td  class="border-2  border-blue p-4"><input type="number" name="tr83" defaultValue id="tr83" className="bg-transparent  text-center border-none w-20" readOnly="readonly" /></td>
                </tr>
              </tbody></table>
            <br />
            <br />
          </div>
          <div className="mb-8 ml-96">
            <input type="button" onClick={printpage}  defaultValue="Click here to print  the observation table" className="border-4 cursor-pointer border-black w-auto p-2 font-bold bg-gradient-to-r from-blue text-pink-700	 text-xl   rounded-lg" />
           
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
