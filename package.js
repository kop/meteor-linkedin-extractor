Package.describe({
    summary: "Wrapper package for blikkhq/linkedin-extractor",
    version: '0.1.8',
    git: 'git@github.com:kop/meteor-linkedin-extractor.git',
    name: 'ikoptiev:linkedin-extractor'
});

Npm.depends({'linkedin-extractor': '0.1.8'});

Package.onUse(function (api) {
    api.addFiles('linkedin_extractor.js', 'server');
    api.export('LinkedInExtractor', 'server');
});
