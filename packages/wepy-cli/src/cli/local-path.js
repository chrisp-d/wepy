import path from 'path';

export default {
    isLocalPath (templatePath) {
    // templatePath example:
    // .wepy_templates
    // E:\workspace\wepy_templates\standard
        return /^[./]|(^[a-zA-Z]:)/.test(templatePath);
    },
    getTemplatePath (templatePath) {
        return path.isAbsolute(templatePath)
      ? templatePath
      : path.normalize(
        path.join(process.cwd(), templatePath)
      );
    }
};
