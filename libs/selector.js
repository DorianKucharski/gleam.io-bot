const gleam_globe = "[class*='fa-globe-americas']"
const gleam_triangle = "[class*='fa-exclamation-triangle']"

const em = "div[id^='em']:not([class*=completed]).entry-method";
const emContent = "div[class^='entry-content']:not([class*=ng-hide])"
const emExpanded = em + ".expanded";
const emDefault = em + " a[data-track-event*='###APP_NAME###'][class*='enter-link'][class*='default']"
const emMandatory = emExpanded + " a[data-track-event*='###APP_NAME###']"
const emVisible = emDefault + ", " + emMandatory
const em_visitButton = emExpanded + " a[class*='btn-large']";
const em_twitterButton = emExpanded + " [class='xl twitter-button']";
const em_continueButton = emExpanded + " div[class*='form-actions'] [class*='btn-primary']";
const em_continueEnabledButton = em_continueButton + ":not([disabled])";
const em_fa_check = "[class*='fa-check']";

const vf = emExpanded + " fieldset[class='inputs']";
// const vf = "fieldset[class='inputs']";

const vf_inGameName = vf + " input[name='in_game_name']";
const vf_state = vf + " select[name='state']";
const vf_stateOther = vf + " input[name='stateOther']";
const vf_country = vf + " select[name='country']";
const vf_company = vf + " input[name='company']";
const vf_birthDateMDY = vf + " input[name='date_of_birth'][age-format='MDY']";
const vf_birthDateDMY = vf + " input[name='date_of_birth'][age-format='DMY']";
const vf_checkbox = vf + " label[class='checkbox'] span[class='icon']"
const vf_phone = vf + " [name='phone']";
const vf_zip = vf + " [name='zip']";
const vf_age = vf + " [name='age']";
const vf_male = vf + " [value='Male']"

module.exports = {
    gleam_globe: gleam_globe,
    gleam_triangle: gleam_triangle,

    em: em,
    emVisible: emVisible,
    emContent: emContent,
    emExpanded: emExpanded,
    em_visitButton: em_visitButton,
    em_twitterButton: em_twitterButton,
    em_continueButton: em_continueButton,
    em_continueEnabledButton: em_continueEnabledButton,
    em_fa_check: em_fa_check,

    vf: vf,
    vf_inGameName: vf_inGameName,
    vf_state: vf_state,
    vf_stateOther: vf_stateOther,
    vf_country: vf_country,
    vf_company: vf_company,
    vf_birthDateMDY: vf_birthDateMDY,
    vf_birthDateDMY: vf_birthDateDMY,
    vf_checkbox: vf_checkbox,
    vf_phone: vf_phone,
    vf_zip: vf_zip,
    vf_age: vf_age,
    vf_male: vf_male,
}