/**
 * Enums or enumerations are a new data type supported in TypeScript.
 * Most (hầu hết) object-oriented(hướng đối tượng) languages like Java and C# use enums.
 * This is now available in TypeScript too.
 *
 * In simple words, enums allow us to declare a set of named constants
 * a collection(tập hợp) of related(liên quan) values that can be numeric or string values.
 */
/** Numberic Enum */
/**
 * are number-based(dựa trên số) enums
 * they store string value as numbers (lưu trữ các giá trị chuỗi dưới dạng số)
 * enum values start from zero and increment (tăng) by 1 for each member
 */
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
/**
 * The enum can be used as a function parameter or return type, as shown below:
 */
var PrintMedias;
(function (PrintMedias) {
    PrintMedias[PrintMedias["Newspaper"] = 1] = "Newspaper";
    PrintMedias[PrintMedias["Newsletter"] = 2] = "Newsletter";
    PrintMedias[PrintMedias["Magazine"] = 3] = "Magazine";
    PrintMedias[PrintMedias["Book"] = 4] = "Book";
})(PrintMedias || (PrintMedias = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedias.Magazine;
    }
}
var mediaType = getMedia('Forbes'); // returns Magazine
/** COMPUTED ENUMS */
