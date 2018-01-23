import download from 'download';
import downloadGitRepo from 'download-git-repo';


/**
 * download official template zip
 * @param {*} template template name
 */
export default {
    downloadOfficialZip (template) {
        const templateName = template.split('#')[0];
        const branch = template.split('#')[1] || 'master';
        return download(`https://raw.githubusercontent.com/wepyjs/wepy_templates/${branch}/zips/${templateName}.zip`);
    },
    downloadRepo (...args) {
        return downloadGitRepo(...args);
    }
};
