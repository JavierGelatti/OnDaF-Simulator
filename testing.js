define([
    './deploy',
    'amber_core/SUnit',
    // --- packages used only during automated testing begin here ---
    'amber-ondafsimulator/OndafSimulator-Tests',
    'amber-ondafsimulator/OndafSimulator-Core-Tests'
    // --- packages used only during automated testing end here ---
], function (amber) {
    return amber;
});
