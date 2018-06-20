exports.cli = {
  config: {
    description: '测试 Plugin 命令', // 命令描述信息，显示在命令列表说明中
    name: 'mip2 template', // 和 usage 一起组成 Usage 信息
    usage: '<id>',
    noArgs: false, // 不需要接受参数
    options: [
      ['-f, --force', '强制执行'],
      ['-p, --port <value>', '端口号']
    ],
    help: [
      '',
      '  Examples:',
      '    # 测试自定义 plugin 命令',
      '    $ mip2 template <id> -f',
      '    # 测试自定义 plugin 命令',
      '    $ mip2 template <id> -p 8888'
    ].join('\n')
  },
  main: function (args, opts) {
    // your own stuff
    console.log('args: ')
    console.log(args)
    console.log('opts: ')
    console.log('opts.force: ' + opts.force)
    console.log('opts.port: ' + opts.port)
  }
}