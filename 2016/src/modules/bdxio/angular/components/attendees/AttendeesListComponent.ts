export class AttendeesListComponent implements ng.IDirective {
    public scope = {
        title: '@',
        anchor: '@',
        attendees: '='
    };
    
    // Pour une liste complète des attributs possibles sur un attendee, cf SharedModel dans les
    // columnFields de orgas/jurys/speakers
    public template: string = `
       <div id="{{anchor}}">&nbsp;</div>
       <section class="attendees-content wrapper">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="section-title text-primary space-top-40 space-left-50 space-bottom-40">{{title}}</h1>
                </div>
                <ul>
                    <li class="col-sm-6 col-md-4 col-lg-3 text-left item-attendees" ng-repeat="attendee in attendees">
                        <span class="content-img-attendees">
                            <span class="company-affiliate">
                                <img src="http://i.imgur.com/SoeLX45.png">
                            </span>

                            <img class="img-avatar" ng-src="{{attendee.avatarUrl}}">

                            <span class="view-details">
                                <button type="button" class="btn-round btn btn-white btn-r-medium">
                                    <i class="fa fa-eye"></i>
                                </button>
                            </span>

                            <ul class="attendees-networks">
                                <li ng-show="attendee.twitter"><a ng-href="{{attendee.twitter}}" target="_blank"><i class="bdx-twitter"></i></a></li>
                                <li ng-show="attendee.facebook"><a ng-href="{{attendee.facebook}}" target="_blank"><i class="bdx-facebook"></i></a></li>
                            </ul>
                        </span>

                        <h4 class="text-secondary highlight-text-bold">{{attendee.firstName}} {{attendee.lastName}}</h4>

                        <p class="desc-attendees" style="display: none;">
                            {{attendee.bio}}
                        </p>

                    </li>
                </ul>
            </div>
        </div>
    `
}
