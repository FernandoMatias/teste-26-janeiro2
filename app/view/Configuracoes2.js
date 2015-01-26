Ext.define('Touch2Demo.view.Configuracoes2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.Configuracoes2',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Configura��es'
	    },
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light'
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'textfield',
			name: 'ip',
			label: 'Ip para a Sincroniza��o',
			id: 'ip'
		    }

		]
	    },
	    {
		xtype: 'button',
		action: 'salvarIP2',
		ui: 'action',
		text: 'Salvar IP'
	    }
	]
    }
});
