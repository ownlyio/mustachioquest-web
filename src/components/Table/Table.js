import './Table.css'

import bordertl from '../../images/updates-tl.png'
import bordertr from '../../images/updates-tr.png'
import borderbl from '../../images/updates-bl.png'
import borderbr from '../../images/updates-br.png'

export default function Table() {
    return (
        <section id="mq-table">
            <div className="container">
                <div className="row justify-content-center align-items-start">
                    <p className="updates-title gotham-black text-white text-center font-size-170 mb-5">MEET THE MUSTACHIOS</p>

                </div>
            </div>

            {/* Borders */}
            <img src={bordertl} className="mq-table-border mq-table-tl" alt="Border Top Left" />
            <img src={bordertr} className="mq-table-border mq-table-tr" alt="Border Top Right" />
            <img src={borderbl} className="mq-table-border mq-table-bl" alt="Border Bottom Left" />
            <img src={borderbr} className="mq-table-border mq-table-br" alt="Border Bottom Right" />
        </section>
    )
}
