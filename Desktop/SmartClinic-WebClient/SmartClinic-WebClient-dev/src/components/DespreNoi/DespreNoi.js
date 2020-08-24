import React from 'react'
import { logout } from '../../actions'
import { useDispatch } from 'react-redux'
import './desprenoi.scss';
import { history } from '../../utils'
import NavBar from '../navbar/NavBar';

function DespreNoi() {
    return (
        <div>
            {/*<div class="relative flex-grow">    
                <div class="m-sm-30">
                    <div class="MuiPaper-root MuiCard-root w-full overflow-auto MuiPaper-elevation6 MuiPaper-rounded">
                        Text despre noi
                    </div>
                </div>
            </div>
            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
                <div class="MuiPaper-root MuiCard-root flex flex-wrap justify-between items-center p-sm-24 bg-paper MuiPaper-elevation6 MuiPaper-rounded">
                    <div class="flex items-center">
                        <span class="material-icons MuiIcon-root jss994" aria-hidden="true">group</span>
                        <div class="ml-3">
                            <small class="text-muted">New Leads</small>
                            <h6 class="m-0 mt-1 text-primary font-medium">3050</h6>
                        </div>
                    </div>
                    <button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button">
                        <span class="MuiIconButton-label">
                            <span class="material-icons MuiIcon-root" aria-hidden="true">arrow_right_alt</span>
                        </span>
                        <span class="MuiTouchRipple-root"></span>
                    </button>
                </div>
            /div>*/}
            <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3">
                    <div class="MuiPaper-root MuiCard-root p-5 flex MuiPaper-elevation3 MuiPaper-rounded">
                        <div class="ml-4">
                            <h3 class="mt-1 text-32">About us:)</h3>
                            <p class="m-0 text-muted">Ceva despre noi. aprx 3 randuri</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DespreNoi;