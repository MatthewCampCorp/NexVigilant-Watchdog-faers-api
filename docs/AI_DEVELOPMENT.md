# AI-Powered Firebase Development Guidelines

## Claude Code Integration

This repository is optimized for Claude Code development. Follow these guidelines to maximize efficiency:

### 1. Task-Driven Development
- Each GitHub issue contains a Claude Code prompt
- Use the prompt to generate initial implementation
- Refine and customize the generated code
- Always review for security and best practices

### 2. Code Generation Workflow
1. **Read the GitHub issue**: Understanding requirements and constraints
2. **Use Claude Code prompt**: Copy the prompt from the issue
3. **Generate implementation**: Let Claude Code create the initial code
4. **Review and refine**: Customize for your specific needs
5. **Test thoroughly**: Run all tests before submitting
6. **Update documentation**: Keep docs current with changes

### 3. Firebase Best Practices
- **Authentication**: Always validate user permissions
- **Security Rules**: Write defensive security rules
- **Error Handling**: Implement comprehensive error handling
- **Performance**: Optimize for scale and efficiency
- **Testing**: Write unit and integration tests

### 4. Code Quality Standards
- Use TypeScript where possible
- Include JSDoc documentation
- Follow consistent naming conventions
- Implement proper error boundaries
- Add comprehensive logging

### 5. AI-Enhanced Features
- Leverage Claude Code for rapid prototyping
- Use AI to generate test cases
- Generate documentation automatically
- Create security rules with AI assistance

### 6. Repository Structure
```
src/
  functions/          # Cloud Functions
  components/         # Frontend components
  security/          # Security rules
  tests/             # Test files
  templates/         # Code templates
docs/                # Documentation
.claude/             # Claude Code configuration
.github/workflows/   # CI/CD pipelines
```

### 7. Deployment Process
1. **Local testing**: Test functions locally
2. **Security review**: Check security rules
3. **Performance testing**: Verify performance
4. **Staging deployment**: Deploy to staging
5. **Production deployment**: Deploy via GitHub Actions

Remember: AI-generated code should always be reviewed and tested thoroughly before deployment.