import {BDXIORootScope} from "../../../../application/angular/index";
import {IFriend} from "../../../models/int/IFriend";
import Dictionary = _.Dictionary;
import {ICompaniesByType, ISharedModel} from "../../../models/int/ISharedModel";

export class PartnersPageComponent implements ng.IDirective {
    public controller:Function = PartnersPageController;
    public template:string = `
        <section id="partners" class="partners wrapper">
            <div class="row">
                <div class="col-sm-12">
                     <h2 class="text-white highlight-text-bold">Sponsors</h2>
                </div>

                <div class="col-xs-12 col-sm-6">

                    <h4 class="text-white highlight-text-bold">
                        Chaque sponsor soutient financièrement la conférence.
                        Sans ces sociétés, l'organisation de BDX.io n'aurait pas été possible :
                        le prix de l'entrée aurait coûté plus cher, certains speakers ne pourraient pas être défrayés,
                        le repas du midi ne pourrait pas être offert...
                        N'hésitez donc pas à aller consulter le site de ces sociétés pour en savoir davantage sur elles.
                     </h4>
                </div>

                <button type="button" class="btn-view-talks btn btn-primary btn-xlg has-icon-left"
                        ng-click="$ctrl.$rootScope.goto('/faq', 'sponsors')">
                    <i class="fa fa-question-circle"></i>Comment devenir partenaire ?
                </button>
            </div>
        </section>
        <partners-list partners-by-type="$ctrl.partnersByType.gold" />
        <partners-list partners-by-type="$ctrl.partnersByType.silver" />
        <partners-list partners-by-type="$ctrl.partnersByType.bronze" />
        <section id="press" class="friends wrapper">
            <div class="row">
                <div class="col-sm-12">
                     <h2 class="text-white highlight-text-bold">Presse / Media</h2>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <h4 class="text-white highlight-text-bold">
                        Il s'agit de partenaires (associations / écoles / communautés / sociétés) qui nous accompagnent 
                        dans la promotion de l'évènement.
                     </h4>
                </div>
            </div>
        </section>
        <friends-list friends="$ctrl.friends" />
    `
}
export class PartnersPageController {

    public static $inject:Array<string> = ['$rootScope', 'ISharedModel',];

    private partnersByType:Dictionary<ICompaniesByType>;
    private friends:Array<IFriend>;

    constructor(private $rootScope:BDXIORootScope, sharedModel:ISharedModel) {
        sharedModel.dataLoaded.then(() => {
            this.partnersByType = sharedModel.data.partners;
            this.friends = sharedModel.data.friends;
        });
    }
}